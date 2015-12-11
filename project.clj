(defproject comamitc "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [secretary "1.2.3"]
                 [hiccups "0.3.0"]]

  :node-dependencies [[source-map-support "0.2.8"]]

  :plugins [[lein-cljsbuild "1.1.1"]
            [lein-npm "0.6.1"]
            [lein-less "1.7.5"]
            [lein-figwheel "0.5.0-2"]]

  :source-paths ["src" "target/classes"]

  :clean-targets ^{:protect false} ["resources/public/js/comamitc.js"
                                    "resources/public/js/comamitc.min.js"
                                    "resources/public/css/main.css"
                                    "resources/public/css/main.min.css"
                                    "target"]

  :less {:source-paths  ["less/main.less"]
         :target-path   "resources/public/css/main.css"}

  :minify-assets {:assets {"resources/public/css/main.min.css" "resources/public/css/main.css"}}

  :figwheel {
     :http-server-root "public" ;; this will be in resources/
     :server-port 3449          ;; default
     :server-ip   "0.0.0.0"     ;; default
     :css-dirs ["public/css"]
  }

  :hooks [leiningen.less]

  :cljsbuild {
    :builds {:dev { :source-paths ["src"]
                    :figwheel true
                    :compiler {
                      :output-to "resources/public/js/comamitc.js"
                      :optimizations :none
                      :pretty-print true}}
             :release { :source-paths ["src"]
                        :compiler {
                          :output-to "resources/public/js/comamitc.min.js"
                          :optimizations :advanced
                          :pretty-print false}}}})
