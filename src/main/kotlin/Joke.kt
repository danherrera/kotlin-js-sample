import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.await
import kotlinx.coroutines.launch
import kotlinx.css.*
import kotlinx.html.js.onClickFunction
import org.w3c.dom.events.Event
import react.*
import styled.css
import styled.styledButton
import styled.styledDiv
import kotlin.browser.window

data class JokeResponseValue(
    val id: Int,
    val joke: String
)

data class JokeResponse(
    val value: JokeResponseValue
)

private val jokes = functionalComponent<RProps> {
    val (joke, setJoke) = useState("")
    val (jokeHashCode, setJokeHashCode) = useState(0)

    val onGetJoke = { _: Event ->
        setJokeHashCode(joke.hashCode())
    }

    useEffect(listOf(jokeHashCode)) {
        GlobalScope.launch {
            val jokesUrl = "http://api.icndb.com/jokes/random/"
            val response = window.fetch(jokesUrl).await()

            if (response.ok) {
                val newJokeResponse = response.json().await().unsafeCast<JokeResponse>()
                setJoke(newJokeResponse.value.joke)
            }
        }
    }

    styledDiv {
        css {
            display = Display.flex
            flexDirection = FlexDirection.column
            alignItems = Align.center
            alignContent = Align.center
            width = 400.px
            margin = "auto"
        }
        styledButton {
            css {
                marginBottom = 20.px
            }
            attrs {
                onClickFunction = onGetJoke
            }
            +"New Joke"
        }
        +joke
    }
}

fun RBuilder.jokes() = child(jokes) {}

