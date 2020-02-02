import React, { useState } from 'react'
import url from '../config'

import '../components/styles/ExerciseNew.css'

import ExerciseNew from './ExerciseNew'
import FatalError from './500'
import Loading from '../components/Loading'

const ExerciseNewContainer = ({ history }) => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    img: '',
    leftColor: '',
    rightColor: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    setLoading(true)
    e.preventDefault()

    try {
      let config = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      }
      await fetch(`${url}/exercises`, config)
      setLoading(false)
      history.push('/exercise')
    } catch (error) {
      setLoading(false)
      setError(error)
    }
  }
  if (loading) return <Loading />
  if (error) return <FatalError />

  return (
    <ExerciseNew form={form} onChange={handleChange} onSubmit={handleSubmit} />
  )
}

export default ExerciseNewContainer

// class ExerciseNewContainer extends React.Component {
//   state = {
//     form: {
//       title: "",
//       description: "",
//       img: "",
//       leftColor: "",
//       rightColor: ""
//     },
//     loading: false,
//     error: null
//   };

//   handleChange = e => {
//     this.setState({
//       form: {
//         ...this.state.form,
//         [e.target.name]: e.target.value
//       }
//     });
//     // let partialState = {}
//     // partialState[e.target.name] = e.target.value
//     // this.setState(partialState)
//   };

//   handleSubmit = async e => {
//     this.setState({
//       loading: true
//     });
//     e.preventDefault();
//     try {
//       let config = {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(this.state.form)
//       };

//       let res = await fetch("http://localhost:8000/api/exercises", config);
//       let json = await res.json();

//       this.setState({
//         loading: false
//       });

//       this.props.history.push("/exercise");
//     } catch (error) {
//       this.setState({
//         loading: false,
//         error
//       });
//     }
//   };

//   render() {
//     if (this.state.error) return <FatalError />;

//     if (this.state.loading) return <Loading />;

//     return (
//       <ExerciseNew
//         form={this.state.form}
//         onChange={this.handleChange}
//         onSubmit={this.handleSubmit}
//       />
//     );
//   }
// }

// export default ExerciseNewContainer;
