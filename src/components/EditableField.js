import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

class EditableField extends React.Component {
  render() {
    //this.prop can be declared separatly don't need to write again and again
    const { cellData, onItemizedItemEdit } = this.props;

    return (
      <InputGroup className="my-1 flex-nowrap">
        {cellData.leading && (
          <InputGroup.Text className="bg-light fw-bold border-0 text-secondary px-2">
            <span className="border border-2 border-secondary rounded-circle d-flex align-items-center justify-content-center small" style={{ width: '20px', height: '20px' }}>
              {cellData.leading}
            </span>
          </InputGroup.Text>
        )}
        <Form.Control
          className={cellData.textAlign}
          type={cellData.type}
          placeholder={cellData.placeholder}
          min={cellData.min}
          name={cellData.name}
          id={cellData.id}
          value={cellData.value}
          step={cellData.step}
          presicion={cellData.presicion}
          aria-label={cellData.name}
          onChange={onItemizedItemEdit}
          required
        />
      </InputGroup>
    );
  }
}

export default EditableField;

// class EditableField extends React.Component {
//   render() {
//     return (
//       <InputGroup className="my-1 flex-nowrap">
//         {
//           this.props.cellData.leading != null &&
//           <InputGroup.Text
//             className="bg-light fw-bold border-0 text-secondary px-2">
//             <span className="border border-2 border-secondary rounded-circle d-flex align-items-center justify-content-center small" style={{width: '20px', height: '20px'}}>
//               {this.props.cellData.leading}
//             </span>
//           </InputGroup.Text>
//         }
//         <Form.Control
//           className={this.props.cellData.textAlign}
//           type={this.props.cellData.type}
//           placeholder={this.props.cellData.placeholder}
//           min={this.props.cellData.min}
//           name={this.props.cellData.name}
//           id={this.props.cellData.id}
//           value={this.props.cellData.value}
//           step={this.props.cellData.step}
//           presicion={this.props.cellData.presicion}
//           aria-label={this.props.cellData.name}
//           onChange={this.props.onItemizedItemEdit}
//           required
//         />
//       </InputGroup>
//     );
//   }
// }

// export default EditableField;
