(defproject comamitc "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.7.0-RC1"]
                 [org.clojure/clojurescript "0.0-3308"]
                 [reagent "0.5.0"]
                 [secretary "1.2.3"]
                 [hiccups "0.3.0"]]

  :node-dependencies [[source-map-support "0.2.8"]]

  :plugins [[lein-cljsbuild "1.0.4"]
            [lein-npm "0.4.0"]]

  :source-paths ["src" "target/classes"]

  :clean-targets ^{:protect false} ["../public/js/comamitc.js" 
                                    "../public/js/comamitc.min.js"
                                    "target"]

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src"]
              :compiler {
                :output-to "../public/js/comamitc.js"
                :optimizations :whitespace
                :pretty-print true}}
             {:id "release"
              :source-paths ["src"]
              :compiler {
                :output-to "../public/js/comamitc.min.js"
                :optimizations :advanced
                :pretty-print false}}]})
