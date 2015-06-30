(ns comamitc.html.core
  (:require 
    [comamitc.dom :as dom]
    [comamitc.utils :as utils]
    [reagent.core :as reagent :refer [atom]]))

(defn home-content []
  [:div#bodyContent.wrapper-a0def 
    [:div.home-content-6ff4e 
      [:div "Howdy!"] 
      [:div "I am a passionate engineer and leader experienced in designing, developing, & deploying fully cloud based applications."]]])

(def body-map
  {:default home-content})

(defn nav-list []
  [:ul
    [:li.nav-link-2c23a 
      [:a {:href "#/about"} "about me"]]
    [:li.nav-link-2c23a 
      [:a {:href "#/resume"} "resume"]]
    [:li.nav-link-2c23a 
      [:a {:href "#/portfolio"} "portfolio"]]])

(defn nav-bar []
  [:header#navBar.wrapper-a0def.header-7f1e8 
    [:a.header-left-363bb {:href "https://comamitc.me/"}
      [:div.header-logo-5bacd ;"</>"]
        [:img {:src "images/texas-sil.png"
               :alt "MFC"
               :height "50px"}]]
      [:div.header-title-947c2  "Mitch Comardo"]]
    [:div.header-right-591aa 
      (nav-list)]])

(defn footer []
  [:footer.bottom-c3612 
    [:div.wrapper-a0def.footer-center-b2a7f 
      [:ul 
        [:li.footer-link-b3f79 
          [:a {:href "mailto:comamitc@gmail.com"} [:i.fa.fa-envelope]]]
        [:li.footer-link-b3f79 
          [:a {:href "http://facebook.com/comamitc"} [:i.fa.fa-facebook]]]
        [:li.footer-link-b3f79 
          [:a {:href "http://twitter.com/comamitc"} [:i.fa.fa-twitter]]]
        [:li.footer-link-b3f79 
          [:a {:href "http://linkedin.com/in/mitchcomardo"} [:i.fa.fa-linkedin]]]
        [:li.footer-link-b3f79 
          [:a {:href "http://github.com/comamitc"} [:i.fa.fa-github-alt]]]]]])

; (defn nav-bar-2 []
;   [:header#navBar.wrapper-a0def.header-7f1e8 
;     [:ul
;       [:li.inline-list-b9fea.header-title-318a9 "Mitch Comardo"]
;       [:li.inline-list-b9fea.header-logo-318a9 
;         [:img {:src "images/texas-sil.png"
;                :alt "MFC"
;                :height "40px"}]]
;       [:li.inline-list-b9fea.header-link-318a9 
;         (nav-list)]]])

(defn app [opts]
  [:div.body-c83c6
    (nav-bar)
    (opts)
    (footer)])

(defn ^:export render [alt]
  (reagent/render [app (get body-map alt)]
                  (.-body js/document)))
