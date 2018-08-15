import React,{Fragment} from "react";
import { render } from "react-dom";

const Welcome = () => (
  <Fragment>
    <h1>Hello</h1>
    <p>Hai</p>
  </Fragment>
);
class Table  extends React.Component {
    render() {
      return (
        <table>
          <tr>
            <Columns />
          </tr>
        </table>
      );
    }
  }
  class Columns extends React.Component {
    render() {
      return (
        <Fragment>
          <td>Hello</td>
          <td>World</td>
        </Fragment>
      );
    }
  }
/*   Result would be:
  <table>
    <tr>
      <div>
        <td>Hello</td>
        <td>World</td>
      </div>
    </tr>
  </table> */
  
render(<Table />, root);