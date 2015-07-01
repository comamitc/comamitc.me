(ns comamitc.html.core
  (:require 
    [comamitc.dom :as dom]
    [comamitc.utils :as utils]
    [comamitc.config :refer [career]]
    [reagent.core :as reagent :refer [atom]]))

(defn home-content []
  [:div#bodyContent.wrapper-a0def 
    [:div.home-content-6ff4e 
      [:div "Howdy!"] 
      [:div.home-greet-a199e 
        (str "I am a passionate Full-Stack Engineer and leader experienced in designing," 
             " developing & deploying fully cloud-based applications.")]
      [:div.location-a36e7 
        [:i.fa.fa-map-marker.marker-cd4ad] [:span.city-07ffa "Houston, TX"]]]])

(defn resume-content []
  [:div#bodyContent.wrapper-a0def 
      [:div.timeline-f87c7 
        (for [job career] ;; TODO: make sure career is sorted
          [:div.timeline-block-2024c
          [:div.timeline-img-9cc5f]
          [:div {:class (if (odd? (:id job)) "timeline-content-b1670" "timeline-content-cd817")}
            [:div.tl-title-7c942 
              [:a {:href (:link job)} (:company job)] 
              [:span.job-title-720f9 (:job-title job)]]
            [:div.tl-cont-52c3f (:job-desc job)]
            [:div.tl-date-4d0bc (:span job)]]])]])

(defn nav-list [alt]
  [:ul
    [:li.nav-link-2c23a (when (= alt :about) {:class "active-link-8157d"})
      [:a {:href "#/about"} "about me"]]
    [:li.nav-link-2c23a (when (= alt :resume) {:class "active-link-8157d"})
      [:a {:href "#/resume"} "resume"]]
    [:li.nav-link-2c23a (when (= alt :portfolio) {:class "active-link-8157d"})
      [:a {:href "#/portfolio"} "portfolio"]]])

(defn nav-bar [alt]
  [:header#navBar.wrapper-a0def.header-7f1e8 
    [:a.header-left-363bb {:href "https://comamitc.me/"}
      [:div.header-logo-5bacd ;"</>"]
        [:img {:src "images/texas-sil.png"
               :alt "MFC"
               :height "50px"}]]
      [:div.header-title-947c2  "Mitch Comardo"]]
    [:div.header-right-591aa 
      (nav-list alt)]])

(defn nav-bar-2 [alt]
  [:header#navBar.wrapper-a0def.header-7f1e8 
    [:ul
      [:li.inline-list-b9fea.header-title-318a9 "Mitch Comardo"]
      [:li.inline-list-b9fea.header-logo-318a9 
        [:img {:src "images/texas-sil.png"
               :alt "MFC"
               :height "40px"}]]
      [:li.inline-list-b9fea.header-link-318a9 
        (nav-list alt)]]])

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

(def body-map
  {:default home-content
   :resume  resume-content})

(def nav-map
  {:default nav-bar
   :resume  nav-bar-2})


(defn app [alt]
  [:div.body-c83c6
    ((get nav-map alt) alt)
    ((get body-map alt))
    (footer)])

(defn ^:export render [alt]
  (reagent/render [app alt]
                  (.-body js/document)))
