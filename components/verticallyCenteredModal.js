import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Upload from '../components/upload';
import { useForm } from "react-hook-form";
import fetch from 'isomorphic-unfetch';

export default function VerticallyCenteredModal(props) {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = async(data) => {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    data["date"]=dateTime
    let baseUrl = "https://profilesfetch.vercel.app/api/profiles/addEntry"
    let params = "?type="+data.type+"&percent="+data.percent+"&amount="+data.amount+"&title="+data.title+"&explanation="+data.explanation+"&date="+data.date
    //fetch(baseUrl+params)
    
    const response = await fetch(baseUrl+params, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, *cors, same-origin
      cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        //'Content-Type': 'application/json'
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
       // body data type must match "Content-Type" header
    });
    window.location.reload(true);
    console.log(response)
    console.log(data)
    
  }
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >

      <Modal.Body>
        <form onSubmit={handleSubmit(onSubmit)}>
          <select name="type" ref={register({ required: true })}>
            <option value="gain">Gain</option>
            <option value="loss">Loss</option>
          </select><br/>
          <label htmlFor="percent">Percent of initial investment earned or lost (%)</label>
          <input type="number" step="0.01" min="0" id="percent" name="percent" ref={register({ required: true })}/>
          <label htmlFor="amount">Amount of initial investment earned or lost in USD ($):</label>
          <input type="number" step="0.01" min="0" id="amount" name="amount" ref={register({ required: true })}/>
          <label htmlFor="title">What was traded? (i.e. AAPL, Tesla puts, etc.)</label>
          <input id="title" name="title" ref={register({ required: true })}/><br/>
          <label htmlFor="explanation">What did you do and/or any advice?</label>
          <textarea className="form-control" name="explanation" rows="2" id="explanation" maxlength="150" ref={register({ required: true })}></textarea><br/>
          {errors.name && errors.name.type === "required" && <span>This is required</span>}
          <input type="submit"></input>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        
      </Modal.Footer>
    </Modal>
  );
}
