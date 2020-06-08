plugins {
    id("org.jetbrains.kotlin.js") version "1.3.72"
    kotlin("plugin.serialization") version "1.3.72"
}

group = "org.example"
version = "1.0-SNAPSHOT"

repositories {
    jcenter()
    mavenCentral()
    maven("https://kotlin.bintray.com/kotlin-js-wrappers/")
}

dependencies {
    implementation(kotlin("stdlib-js"))
    implementation("org.jetbrains:kotlin-react:16.13.1-pre.107-kotlin-1.3.72")
    implementation("org.jetbrains:kotlin-react-dom:16.13.1-pre.107-kotlin-1.3.72")
    implementation(npm("react", "16.13.1"))
    implementation(npm("react-dom", "16.13.1"))
    implementation("org.jetbrains.kotlinx:kotlinx-html-js:0.7.1")
    implementation("org.jetbrains:kotlin-styled:1.0.0-pre.107-kotlin-1.3.72")
    implementation("org.jetbrains.kotlinx:kotlinx-serialization-runtime-js:0.20.0")
}

kotlin.target.browser { }
