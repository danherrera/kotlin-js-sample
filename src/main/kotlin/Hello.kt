import kotlinx.css.*
import kotlinx.html.js.onChangeFunction
import kotlinx.html.js.onClickFunction
import kotlinx.html.style
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.events.Event
import react.*
import react.dom.*
import styled.css
import styled.styledDiv

private val hello = functionalComponent<RProps> {
    val (name, setName) = useState("")
    val (isEditingName, setEditingName) = useState(true)


    val onNameChange = { event: Event ->
        val newName = (event.target as? HTMLInputElement)?.value.orEmpty()
        setName(newName)
        if (newName.isBlank()) setEditingName(true)
    }

    val onEditName = { _: Event ->
        setEditingName(true)
    }

    val onSaveName = { event: Event ->
        setEditingName(false)
    }

    div {
        attrs.style = kotlinext.js.js {
            display = "flex"
        }
        h2 {
            +"Hello, "
            nameComponent(isEditingName, name, onNameChange, onEditName)
            +"!"
        }
        if (isEditingName)
            button {
                attrs.onClickFunction = onSaveName
                +"Save"
            }
    }
}

private fun RBuilder.nameComponent(
    isEditingName: Boolean,
    name: String,
    onNameChange: (Event) -> Unit,
    onEditName: (Event) -> Unit
) {
    if (isEditingName)
        editNameComponent(name, onNameChange)
    else
        displayNameComponent(name, onEditName)
}

private fun RBuilder.editNameComponent(
    name: String,
    onNameChange: (Event) -> Unit
) {
    input {
        attrs {
            onChangeFunction = onNameChange
            value = name
        }
    }
}

private fun RBuilder.displayNameComponent(
    name: String,
    onEditName: (Event) -> Unit
) {
    span {
        attrs {
            onClickFunction = onEditName
        }
        +name
    }
}

fun RBuilder.hello() = child(hello) {}
