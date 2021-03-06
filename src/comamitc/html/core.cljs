(ns comamitc.html.core
  (:require-macros [hiccups.core :as hiccups])
  (:require 
    [comamitc.dom :as dom]
    [comamitc.utils :as utils]
    [comamitc.config :refer [career skills projects]]
    [hiccups.runtime :as hiccupsrt]))

(hiccups/defhtml home-content []
  [:div#bodyContent.wrapper-a0def 
    [:div.home-content-6ff4e 
      [:div "Howdy!"] 
      [:div.home-greet-a199e 
        (str "I am a passionate full-stack engineer and leader experienced in designing," 
             " developing & deploying fully cloud-based applications.")]
      [:div.location-a36e7 
        [:i.fa.fa-map-marker.marker-cd4ad] [:span.city-07ffa "Houston, TX"]]]])

; (hiccups/defhtml resume-content []
;   [:div#bodyContent.wrapper-a0def 
;       [:div.timeline-f87c7 
;         (for [job career] ;; TODO: make sure career is sorted
;           [:div.timeline-block-2024c
;           [:div.timeline-img-9cc5f]
;           [:div {:class (if (odd? (:id job)) "timeline-content-b1670" "timeline-content-cd817")}
;             [:div.tl-title-7c942 
;               [:a {:href (:link job)} (:company job)] 
;               [:span.job-title-720f9 (:job-title job)]]
;             [:div.tl-cont-52c3f (:job-desc job)]
;             [:div.tl-date-4d0bc (:span job)]]])]])

(hiccups/defhtml experience []
  [:div.exp-d625a 
    [:div.prof-title-2f701 
      [:i.fa.fa-briefcase.space-right] "Experience"]
    (for [job career] ;; TODO: make sure career is sorted
      [:div.job-b1d10
        [:div.job-ttl-4bdc6 
          [:span.job-ttl-dd7a7 (:job-title job)]
          [:span.job-date-06fc3 (:span job)]]
        [:div.co-name-6be4f  [:a {:href (:link job)} (:company job)]]
        [:div.job-desc-ee279 
          [:ul
            (for [desc (:job-desc job)] [:li desc])]]])])

(hiccups/defhtml education []
  [:div.edu-f0232
    [:div.prof-title-2f701 
     [:i.fa.fa-graduation-cap.space-right] "Education"]
    [:div 
      [:div.uni-6c2bd "University of Houston"]
      [:div.degree-c86ab "B.B.A. Management"]
      [:div.dates-053aa "2005 - 2010"]]])

;fa-wrench
(hiccups/defhtml skills-sect []
  [:div.skills-1c9f7 
    [:div.prof-title-2f701 
      [:i.fa.fa-wrench.space-right] "Skills"]
    (for [skill skills]
      [:div.skill-11c15 skill])])

(hiccups/defhtml profile-content []
  [:div#bodyContent.wrapper-a0def 
      [:div.profile-e619f 
        [:div.profile-left-44dfc
          [:img.profile-pic-8ab09 {:src "images/mitch-2015-2.png"}]]
        [:div.profile-right-717af 
          [:div.profile-about-58d23 
            [:div.about-content-80f15 
              [:p (str "Hi, I'm Mitch.  "
                       "I'm a full-stack engineer with 7 years of experience "
                       "who enjoys working on simple, intuitive user experiences and efficient "
                       "code. I currently work at ") 
                  [:a.generic-link-20b6e {:href "http://cmn.com"} "CMN"] 
                  (str " where I develop dynamic applications for the web using"
                       " NodeJS, MySQL, JavaScript, CSS3, and HTML5.")]
              [:p (str "When I'm not at my day job, I enjoy traveling around the world with my wife,"
                       " listening to music, working on side projects and driving my car.")]]]]]
      [:div.profile-e619f
        [:div.profile-left-44dfc
          (education)
          (skills-sect)]
        [:div.profile-right-717af
          (experience)]]])

(hiccups/defhtml project-content []
  [:div#bodyContent.wrapper-a0def 
    [:div.projects-92dca
      (for [proj projects]
        [:div.project-a8584 
          [:img.proj-img-037f6  {:src (:img proj)}]
          [:div.proj-title-78cce (:name proj) 
            [:span.right-0258c (:date proj)]]
          [:div.proj-desc-78cce (:desc proj)
            [:div.proj-links-6d319
              [:div.right-ac7f2 
                (when-let [site (:site proj)]
                  [:a {:href site} [:i.fa.fa-link.proj-link-c7825]])
                (when-let [github (:github proj)]
                  [:a {:href github} [:i.fa.fa-github-alt.proj-link-c7825]])]]]])]])

(hiccups/defhtml nav-list [alt]
  [:ul
    [:li.nav-link-2c23a (when (= alt :profile) {:class "active-link-8157d"})
      [:a {:href "#/profile"} "profile"]]
    [:li.nav-link-2c23a (when (= alt :projects) {:class "active-link-8157d"})
      [:a {:href "#/projects"} "projects"]]
    [:li.nav-link-2c23a 
      [:a {:href "https://comamitc.me/blog"} "blog"]]])

(hiccups/defhtml nav-bar [alt]
  [:header#navBar.wrapper-a0def.header-7f1e8 
    [:a.header-left-363bb {:href "#/"}
      [:div.header-logo-5bacd ;"</>"]
        [:img {:src "images/texas-sil.png"
               :alt "MFC"
               :height "50px"}]]
      [:div.header-title-947c2  "Mitch Comardo"]]
    [:div.header-right-591aa 
      (nav-list alt)]])

(hiccups/defhtml footer []
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
          [:a {:href "http://github.com/comamitc"} [:i.fa.fa-github-alt]]]]
      [:div.disclaimer-d553a 
        [:div.license-5cb15 "All Rights Reserved Mitch Comardo © 2015-2016"]]]]) 

(def body-map
  {:default  home-content
   :profile  profile-content
   :projects project-content})

(hiccups/defhtml app [alt]
  [:div.body-c83c6
    (nav-bar alt)
    ((get body-map alt))
    (footer)])

(defn ^:export render [alt]
  (dom/set-body! (app alt)))
