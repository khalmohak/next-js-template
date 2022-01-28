import {useState} from 'react'
import {connect} from "react-redux"
import {setInfo} from "../redux/actions/main"

function Index(props) {
    const {name, setInfo} = props
    const [newName, setName] = useState("")

    return (
        <div>
            <p>Enter a Name {name}:</p>
            <input
                type="text"
                value={newName}
                onChange={(e) => setName(e.target.value)}>

            </input>
            <button onClick={() => setInfo(newName)}>
                Submit
            </button>
        </div>
    )
}

const mapStateToProps = state => {
    return {name: state.main.name}
}

const mapDispatchToProps = {
    setInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)