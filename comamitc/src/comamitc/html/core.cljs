(ns comamitc.html.core
  (:require 
    [comamitc.dom :as dom]
    [comamitc.utils :as utils]
    [reagent.core :as reagent :refer [atom]]))

(defn nav-bar [props]
  )

(defn app [props]
  (utils/log props)
  [:div
    [:div#navBar "header"]
    [:div#bodyContent "body"]])

(defn ^:export render []
  (reagent/render [app]
                  (.-body js/document)))
