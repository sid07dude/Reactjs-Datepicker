import React from 'react'
import './App.css';
// import ModalPopup from './modal_popup';
import DatePicker from './datePicker';
// import ChipInputExample from './chipInputExample';
// import Country from './components/country';
// import GooglePexel from "./googlePexel";
// import GoogleBooksSearch from "./googleBooksSearch";
// import Contacts from './components/contacts';
function App() {
  return (
    // <GooglePexel></GooglePexel>
    // <GoogleBooksSearch></GoogleBooksSearch>
    // <ChipInputExample></ChipInputExample>
    <DatePicker></DatePicker>
    // <ModalPopup />
    // <div className="row">
    //   <div className="col-md-8 offset-md-2">
    //     {/* <Contacts /> */}
    //     <Country />
    //   </div>
    // </div>
  )
}

export default App;

// import React from 'react';
// import './App.css';
// import { Button,Modal} from 'react-bootstrap';
// class App extends React.Component {
//   constructor(){
//     super();
//     this.state={
//       show:false
//     }
//   }
//   handleModal(){
//     this.setState({show:!this.state.show})
//   }
//   render(){
//     return (
//       <div>
//         <h2 align='center'>Example of Modal in Reactjs</h2>
//         <div className="modalClass">
//           <Button onClick={()=>this.handleModal()}>Click To Open Modal</Button>
//         </div>

//         <Modal show={this.state.show} onHide={()=>this.handleModal()}>
//           <Modal.Header closeButton>This is a Modal Heading</Modal.Header>
//           <Modal.Body>This is a Modal Body</Modal.Body>
//           <Modal.Footer>
//             <Button onClick={()=>this.handleModal()}>Close</Button>
//             <Button onClick={()=>this.handleModal()}>Save</Button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     )
//   }
// }
// export default App;

// import React, { Fragment } from 'react';
// import Loader from 'react-loaders';
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       loading: true,
//     }
//   }
//   // componentDidMount = () => {
//   //   // this.getSessionData();
//   // }

//   getSessionData = () => {
//     this.setState({ loading: true });
//     // setTimeout(() => {
//     //   this.setState({ loading: false });
//     // }, 2000);

//   }
//   componentDidMount = () => {
//     // new Profile({ id: this.props.id }).fetch({
//     //   success: this.onSuccess,
//     //   error: this.onError
//     // })
//   }

//   onError = (err) => {
//     // error handling goes here
//   }

//   render() {

//     const { loading } = this.state;

//     // return (
//     //   <Fragment>
//     //     <Loader type="ball-clip-rotate-multiple" style={{ transform: 'scale(1.4)' }} />
//     //     {
//     //       loading &&
//     //       <div className="loaderDiv"><div className="loader">
//     //         <Loader type="ball-clip-rotate-multiple" style={{ transform: 'scale(1.4)' }} />
//     //       </div></div>
//     //     }

//     //   </Fragment >
//     // )

//     return (

//       <Loader loaded={this.state.loaded}>
//       </Loader>
//     );
//   }
// }
// export default App;


// import React from 'react';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function App(){
//   const notify = () => toast("Wow so easy!");

//   return (
//     <div>
//       <button onClick={notify}>Notify!</button>
//       <ToastContainer />
//     </div>
//   );
// }
// export default App;


// import React from 'react';
// import { FadeLoader } from 'react-spinners';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <FadeLoader height="15" width="5" radius="2" margin="2" color="red" loading></FadeLoader>
//     </div>
//   );
// }
// export default App;

// import React, { Component, Fragment } from 'react';
// import SignIn from './signIn';

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       showModalPopup: false
//     }
//   }
//   isShowSignIn = (status) => {
//     this.setState({ showModalPopup: status });
//   };
//   render() {
//     return (
//       <Fragment>
//         <h3 align="center">Demo of Modal Pop up in Reactjs</h3>
//         <header>
//           <Fragment>
//             <div
//               className="nav-item"
//               onClick={() => this.isShowSignIn(true)}>
//               <button align="center">Modal Pop up</button>
//             </div>
//           </Fragment>
//         </header>
//         <SignIn
//           showModalPopup={this.state.showModalPopup}
//           onSignInClose={this.isShowSignIn}
//         ></SignIn>
//       </Fragment>
//     )
//   }
// }

// export default App;

