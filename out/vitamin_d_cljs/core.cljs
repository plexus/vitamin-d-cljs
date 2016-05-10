(ns vitamin-d-cljs.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(def slots-tick 40)
(def mood-tick 60)
(def success-tick 60)
(def time-tick 60)
(def btn-dimension {:w 180 :h 50})
(def btn-out-coord {:x 100 :y 450})
(def btn-in-coord  {:x 320 :y 450})
(def stats-icons   {:mood "sun.png"
                    :success "money.png"})
(def slot-images   {:0 "beers.png"
                    :1 "computer.png"
                    :2 "fries.png"
                    :3 "book.png"})

(def initial-state
  {:countdown 60
   :stats
     {:mood 50
      :success 50}
   :slots [0 0 0]
   :running false})

(def load-image (memoize q/load-image))

(defn reset [state]
  initial-state)

(defn check-if-alive [state]
  (if (or
        (<= (:success (:stats state)) 0)
        (<= (:mood (:stats state)) 0)
        (<= (:countdown state) 0))
    (reset state)
    state))

(defn increase-stats [state stat]
  (update-in state [:stats stat] inc))

(defn is-in-button []
  (if (and
        (> (q/mouse-x) (:x btn-out-coord))
        (< (q/mouse-x) (+ (:x btn-out-coord) (:w btn-dimension)))
        (> (q/mouse-y) (:y btn-out-coord))
        (< (q/mouse-y) (+ (:y btn-out-coord) (:h btn-dimension))))
    :mood
    (if (and
          (> (q/mouse-x) (:x btn-in-coord))
          (< (q/mouse-x) (+ (:x btn-in-coord) (:w btn-dimension)))
          (> (q/mouse-y) (:y btn-in-coord))
          (< (q/mouse-y) (+ (:y btn-in-coord) (:h btn-dimension))))
      :success
      false)))

(defn handle-mouse [state]
  (let [button-name (is-in-button)
        slots (:slots state)]
    (if (= (nth slots 0) (nth slots 1) (nth slots 2))
      (if (and (q/mouse-pressed?) button-name)
        (increase-stats state button-name)
        state)
      state)))

(defn check-for-tick [num]
  (= (mod (q/frame-count) num) 0))

(defn update-countdown [state]
   (if (check-for-tick time-tick)
     (update-in state [:countdown] dec)
     state))

(defn update-mood [state]
   (if (check-for-tick mood-tick)
     (update-in state [:stats :mood] dec)
     state))

(defn update-success [state]
   (if (check-for-tick success-tick)
     (update-in state [:stats :success] dec)
     state))

(defn generate-slot []
  (rand-int 4))

(defn update-slots [state]
  (if (check-for-tick slots-tick)
    (assoc state :slots [(generate-slot) (generate-slot) (generate-slot)])
    state))

(defn setup []
  (q/text-font (q/create-font "Quicksand-Bold" 30))
  initial-state)

(defn load-slot-image [i state]
  (let [num (nth (:slots state) i)]
    (load-image ((keyword (str num)) slot-images))))

(defn draw-stats-counter [state description key x y]
 (q/text description x (- y 20))
  ; divided by 10 because only 1 icon per every 10 stats points
 (doseq [i (range (/ (key (:stats state)) 10))]
   (q/image (load-image (key stats-icons)) (+ x (* 25 i)) y 20 18)))

(defn draw-ui []
  (q/no-stroke)
  ; count down bar
  (q/fill 100 200 200)
  (q/rect 100 68 400 20)
  ; buttons
  (q/rect (:x btn-out-coord) (:y btn-out-coord) (:w btn-dimension) (:h btn-dimension))
  (q/rect (:x btn-in-coord) (:y btn-in-coord) (:w btn-dimension) (:h btn-dimension))
  ; switch to black for all the text
  (q/fill 0))

(defn draw-stats [state]
  (q/text-size 30)
  (q/text (str "Time left: " (:countdown state) "s") 200 80)
  (q/text-size 16)
  (draw-stats-counter state "MOOD" :mood 100 180)
  (draw-stats-counter state "SUCCESS" :success 380 180))

(defn draw-slots [state]
  (doseq [i (range 3)]
    (q/image (load-slot-image i state) (+ 100 (* 150 i)) 260 100 100)))

(defn draw-buttons []
  (q/text-size 28)
  ; this can probably be refactor
  (if (and
           (q/mouse-pressed?)
           (= (is-in-button) :mood))
    (q/fill 255)
    (q/fill 0))
  (q/text "Go outside" 110 485)
  (if (and
           (q/mouse-pressed?)
           (= (is-in-button) :success))
    (q/fill 255)
    (q/fill 0))
  (q/text "Stay inside" 330 485))

(defn draw-start-screen []
  (q/image (load-image "start.png") 0 0))

(defn draw [state]
  (q/background 255)
  (if (:running state)
    (do
      (draw-ui)
      (draw-stats state)
      (draw-slots state)
      (draw-buttons))
    (draw-start-screen)))

(defn update-running [state]
  (if (and
        (= (mod (q/frame-count) 100) 0)
        (= (:running state) false))
    (assoc state :running true)
    state))

(defn update-state [state]
  (-> state
    (update-running)
    (check-if-alive)
    (update-slots)
    (update-mood)
    (update-success)
    (update-countdown)
    (handle-mouse)))

(def all-images ["beers" "book" "computer" "fries" "money" "start-2x" "start" "sun"])

(defn start-sketch []
  (q/defsketch vitamin-d
    :host "vitamin-d-cljs"
    :title "Vitamin D"
    :setup setup
    :draw draw
    :update update-state
    :size [600 600]
    :middleware [m/fun-mode]))

(defn preload-images-and-go [imgs]
  (if (seq imgs)
    (let [jsimg (js/Image.)]
      (set! (.-onload jsimg) (preload-images-and-go (next imgs)))
      (set! (.-onabort jsimg) (preload-images-and-go (next imgs)))
      (set! (.-onerror jsimg) (preload-images-and-go (next imgs)))
      (set! (.-src jsimg) (str (first imgs) ".png")))
    (start-sketch)))

(preload-images-and-go all-images)
