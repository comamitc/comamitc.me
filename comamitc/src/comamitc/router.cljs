(ns comamitc.router
  (:require
      [goog.events :as events]
      [goog.history.EventType :as EventType]
      [secretary.core :as secretary :refer-macros [defroute]]
      [comamitc.utils :as utils]
      [comamitc.html.core :as html])
  (:import goog.History))

(secretary/set-config! :prefix "#")

(defroute "/" []
  (html/render :default))

(defroute "/profile" []
  (html/render :profile))

(defroute "/projects" []
  (html/render :projects))

(defroute "*" []
  (utils/log "this page does not exist"))

(defn init []
  (let [h (History.)]
    (goog.events/listen h EventType/NAVIGATE #(secretary/dispatch! (.-token %)))
    (doto h (.setEnabled true))))
