(ns comamitc.html.core
  (:require 
    [comamitc.dom :as dom]
    [comamitc.utils :as utils]
    [reagent.core :as reagent :refer [atom]]))

(defn body-content []
  [:div#bodyContent.wrapper-a0def "body"])

(defn nav-list []
  [:ul
    [:li.nav-link-2c23a 
      [:a {:href "#/about"} "about me"]]
    [:li.nav-link-2c23a 
      [:a {:href "#/resume"} "resume"]]
    [:li.nav-link-2c23a 
      [:a {:href "#/portfolio"} "portfolio"]]])

(defn nav-bar-1 []
  [:header#navBar.wrapper-a0def.header-7f1e8 
    [:a.header-left-363bb {:href "https://comamitc.me/"}
      [:div.header-logo-5bacd ;"</>"]
        [:img {:src "images/texas-sil.png"
               :alt "MFC"
               :height "50px"}]]
      [:div.header-title-947c2  "Mitch Comardo"]]
    [:div.header-right-591aa 
      (nav-list)]])

(defn nav-bar-2 []
  [:header#navBar.wrapper-a0def.header-7f1e8 
    [:ul
      [:li.inline-list-b9fea.header-title-318a9 "Mitch Comardo"]
      [:li.inline-list-b9fea.header-logo-318a9 
        [:img {:src "images/texas-sil.png"
               :alt "MFC"
               :height "40px"}]]
      [:li.inline-list-b9fea.header-link-318a9 
        (nav-list)]]])

(defn app [opts]
  [:div
    (nav-bar-1)
    (body-content)])

(defn ^:export render [alt]
  (reagent/render [app alt]
                  (.-body js/document)))
