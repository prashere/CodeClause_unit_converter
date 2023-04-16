

function lengthConverter(){
    const input_l_unit=document.getElementById("input-l-unit").value;
    const output_l_unit=document.getElementById("output-l-unit").value;
    const input_l_value=document.getElementById("input-l-value").value;

    //converting input value to meters
    let meters;
    switch(input_l_unit){
        case'cm':
            meters=input_l_value/100;
            break;
        case 'in':
            meters=input_l_value*0.0254;
            break;
        case 'ft':
            meters=input_l_value*0.3048;
            break;
    }
    
    //now converting meter value into output unit value
    let output_l_value;
    switch(output_l_unit){
        case 'cm':
            output_l_value=meters*100;
            break;
        case 'm':
            output_l_value=input_l_value*1;
            break;
        case 'in':
            output_l_value=meters*39.3701;
            break;
        case 'ft':
            output_l_value=meters*3.28084;
            break;
    }
    
    const outputValueElement=document.getElementById("output-l-value");
    outputValueElement.innerHTML=`${input_l_value} ${input_l_unit}=${output_l_value.toFixed(2)}${output_l_unit}`;
    outputValueElement.style.color="#023047";
    outputValueElement.style.fontSize="30px";
    outputValueElement.style.fontFamily="Open Sans, sans-serif";
}

function massConverter()
{
    const input_m_unit=document.getElementById("input-m-unit").value;
    const input_m_value=document.getElementById("input-m-value").value;
    const output_m_unit=document.getElementById("output-m-unit").value;

    //converting input value to kilograms first
    let kilograms;
    switch(input_m_unit){
        case 'g':
            kilograms=input_m_value/1000;
            break;
        case 'ton':
            kilograms=input_m_value*1000;
            break;
    }
    //now converting kilograms to output unit
    let output_m_value;
    switch(output_m_unit){
        case 'kg':
            output_m_value=input_m_value*1;
            break;
        case 'g':
            output_m_value=kilograms*1000;
            break;
        case 'ton':
            output_m_value=kilograms/1000;
            break;

    }
    const outputValueElement2=document.getElementById("output-m-value");
    outputValueElement2.innerHTML=`${input_m_value} ${input_m_unit}=${output_m_value.toFixed(2)}${output_m_unit}`;
    outputValueElement2.style.color="#023047";
    outputValueElement2.style.fontSize="30px";
    outputValueElement2.style.fontFamily="Open Sans, sans-serif"; 

}

function timeConverter()
{
    const input_t_unit=document.getElementById("input-t-unit").value;
    const input_t_value=document.getElementById("input-t-value").value;
    const output_t_unit=document.getElementById("output-t-unit").value;

    //converting input value to minutes first
    let min;
    switch(input_t_unit){
        case 'sec':
            min=input_t_value/60;
            break;
        case 'hr':
            min=input_t_value*60;
            break;
    }
    //now converting min to output unit
    let output_t_value;
    switch(output_t_unit){
        case 'min':
            output_t_value=input_t_value*1;
            break;
        case 'sec':
            output_t_value=min*60;
            break;
        case 'hr':
            output_t_value=min/60;
            break;

    }
    const outputValueElement3=document.getElementById("output-t-value");
    outputValueElement3.innerHTML=`${input_t_value} ${input_t_unit}=${output_t_value.toFixed(2)}${output_t_unit}`;
    outputValueElement3.style.color="#023047";
    outputValueElement3.style.fontSize="30px";
    outputValueElement3.style.fontFamily="Open Sans, sans-serif"; 

}

function tempConverter()
{
    const input_temp_unit=document.getElementById("input-temp-unit").value;
    const input_temp_value=document.getElementById("input-temp-value").value;
    const output_temp_unit=document.getElementById("output-temp-unit").value;

    //converting input value to Celcius first
    let celcius;
    switch(input_temp_unit){
        case 'C':
            celcius=input_temp_value*1;
            break;
        case 'F':
            celcius=(input_temp_value - 32) * 5/9
            break;
        case 'K':
            celcius=input_temp_value - 273.15;
            break;
    }
    //now converting celcius to output unit
    let output_temp_value;
    switch(output_temp_unit){
        case 'C':
            output_temp_value=celcius*1;
            break;
        case 'F':
            output_temp_value=celcius * 9/5 + 32
            break;
        case 'K':
            output_temp_value=celcius + 273.15;
            break;

    }
    const outputValueElement3=document.getElementById("output-temp-value");
    outputValueElement3.innerHTML=`${input_temp_value} ${input_temp_unit}=${output_temp_value.toFixed(2)}${output_temp_unit}`;
    outputValueElement3.style.color="#023047";
    outputValueElement3.style.fontSize="30px";
    outputValueElement3.style.fontFamily="Open Sans, sans-serif"; 

}