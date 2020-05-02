import React from "react";

import "./App.css";
import Button from "./button/button";
import ButtonFilter from "./buttonFilter/buttonFilter";
import RangeFilter from "./rangeFilter/rangeFilter";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.shape = React.createRef();
    this.color = React.createRef();
    this.opacity = React.createRef();
    this.cut = React.createRef();
    this.size = React.createRef();
    this.prize = React.createRef();

    this.state = {
      shapes: [
        { name: "redondo", src: "Forma/redondo" },
        { name: "princesa", src: "Forma/princesa" },
        { name: "esmeralda", src: "Forma/esmeralda" },
        { name: "ovalo", src: "Forma/ovalo" },
        { name: "marquesa", src: "Forma/marquesa" },
        { name: "pera", src: "Forma/pera" },
        { name: "asscher", src: "Forma/asscher" },
        { name: "corazon", src: "Forma/corazon" },
        { name: "cojijn", src: "Forma/cojijn" },
        { name: "baguette", src: "Forma/baguette" },
        { name: "trillon", src: "Forma/trillon" },
        { name: "radiante", src: "Forma/radiante" },
      ],
      color: [
        { name: "transparente", src: "Color/incoloro" },
        { name: "casi incoloro", src: "Color/casi-incoloro" },
        { name: "ligeramente amarillo", src: "Color/ligeramente-amarillo" },
        { name: "amarillo claro", src: "Color/amarillo-claro" },
      ],

      opacity: [
        { name: "perfecta", src: "Claridad/perfecta" },
        { name: "imperfecciones no visibles", src: "Claridad/imperfecciones-no-visibles" },
        { name: "imperfecciones visibles a 10x", src: "Claridad/imperfecciones-10x" },
        { name: "imperfecciones visibles a simple vista", src: "Claridad/imperfecciones-simple-vista" },
      ],
      cuts: [
        { name: "Exclente (Maximo Brillo)", src: "Corte/excelente" },
        { name: "Muy Buena (Muy Brillante)", src: "Corte/muy-bueno" },
        { name: "Bueno (Brillante)", src: "Corte/bueno" },
        { name: "Regular (Poco Brillante)", src: "Corte/regular" },
      ],
    };
  }

  search = () => {
    let filter = {
      shape:this.shape.current.getSelected(),
      color:this.color.current.getSelected(),
      opacity:this.opacity.current.getSelected(),
      cut:this.cut.current.getSelected(),
      size:this.size.current.getSelected(),
      prize:this.prize.current.getSelected(),
    }
    if(
      filter.shape===undefined ||
      filter.color===undefined ||
      filter.opacity===undefined ||
      filter.cut===undefined
      ){
        alert("Rellena todos los campos")
    }else{
      console.log(filter)
    }
  }

  clean = () => {
    this.shape.current.clearSelected()
    this.color.current.clearSelected()
    this.opacity.current.clearSelected()
    this.cut.current.clearSelected()
    this.size.current.clearSelected()
    this.prize.current.clearSelected()
  }

  render() {
    return (
      <div className="container">
        <div className="half">
          <ButtonFilter ref={this.shape} title="FORMA" size="col-6" tooltip="Elige solo una forma"  buttons={this.state.shapes} ></ButtonFilter>
          <ButtonFilter ref={this.color} title="COLOR" tooltip="Elige solo un color" size="col-4" buttons={this.state.color} ></ButtonFilter>
          <ButtonFilter ref={this.opacity} title="CLARIDAD" tooltip="Elige solo una claridad" size="col-4" buttons={this.state.opacity}  ></ButtonFilter>
        </div>
        <div className="half">
        <ButtonFilter ref={this.cut} title="CORTO" size="col-4" tooltip="Elige solo un corte"  buttons={this.state.cuts} ></ButtonFilter>
        <RangeFilter ref={this.size} title="QUILATAJE" tooltip="Elige un rango de quilataje" images="true" min="0" max="30" step="0.1"></RangeFilter>
        <RangeFilter ref={this.prize} title="PRECIO" tooltip="Elige un rango de precio"  min="200" max="5000000" step="100"></RangeFilter>
        </div>
        <div className="submit" onClick={this.search}>
          <Button label="buscar" color="fill"  ></Button>
        </div>
        <div className="submit" onClick={this.clean}>
          <Button label="limpiar filtros" color="clear"></Button>
        </div>
      </div>
    );
  }
}

export default App;
