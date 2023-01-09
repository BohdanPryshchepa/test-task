import { Component } from 'react';
import React from 'react';



export default class FetchRandomUser extends React.Component {
    state = {
      loading: true,
      id: null
    };
  
    async componentDidMount() {
      const url = "https://public.api.openprocurement.org/api/2.5/tenders/09076ffc415e4d57ad7046aacc91b6e1";
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ id: data.data, loading: false });
    }
  
    render() {
      if (this.state.loading) {
        return <div>loading...</div>;
      }
  
      if (!this.state.id) {
        return <div>didn't get a data</div>;
      }
  
      return (
        <div>
          <div>{this.state.id.amount}</div>
        </div>
      );
    }
  }


//   export default class FetchRandomUser extends React.Component {
//     state = {
//       loading: true,
//       person: null
//     };
  
//     async componentDidMount() {
//       const url = "https://api.randomuser.me/";
//       const response = await fetch(url);
//       const data = await response.json();
//       this.setState({ person: data.results[0], loading: false });
//     }
  
//     render() {
//       if (this.state.loading) {
//         return <div>loading...</div>;
//       }
  
//       if (!this.state.person) {
//         return <div>didn't get a person</div>;
//       }
  
//       return (
//         <div>
//           <div>{this.state.person.gender}</div>
//           <div>{this.state.person.name.first}</div>
//           <div>{this.state.person.name.last}</div>
//           <img src={this.state.person.picture.large} />
//         </div>
//       );
//     }
//   }





