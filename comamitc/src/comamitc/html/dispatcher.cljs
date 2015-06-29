(ns comamitc.html.dispatcher
  (:require 
    [comamitc.dom :as dom]
    [reagent.core :as reagent :refer [atom]]))

(defn app [props]
  [:div
    [:div#navBar "header"]
    [:div#bodyContent "body"]])

(defn ^:export run []
  (reagent/render [app]
                  (.-body js/document)))

