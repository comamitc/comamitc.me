(ns comamitc.html.core
  (:require 
    [comamitc.dom :as dom]
    [comamitc.utils :as utils]
    [reagent.core :as reagent :refer [atom]]))

(defn body-content [props]
  [:div#bodyContent.wrapper-a0def "body"])

(defn nav-bar [props]
  [:header#navBar.wrapper-a0def.header-7f1e8 
    [:a.header-left-363bb {:href "https://comamitc.me/"}
      [:div.header-logo-5bacd ;"</>"]
        [:img {:src "images/texas-sil.png"
               :alt "MFC"
               :height "50px"}]]
      [:div.header-title-947c2  "Mitch Comardo"]]
    [:div..header-right-591aa "."]])

(defn nav-bar2 [props]
  [:header#navBar.wrapper-a0def.header-7f1e8 
    [:ul 
      [:li "one"]
      [:li "two"]
      [:li "three"]]])

(defn app [props]
  [:div
    (nav-bar2)
    (body-content)])

(defn ^:export render []
  (reagent/render [app]
                  (.-body js/document)))
