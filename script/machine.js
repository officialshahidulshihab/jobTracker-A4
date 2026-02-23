function getAnyElementById(id){
    const elementId =document.getElementById(id)
    return elementId;

}
function getAnyElementByClassName(classList){
    const elementClass =document.getElementsByClassName(classList)
    return elementClass;

}


function JobsText() {
    const totalInSec = total;
    const interviewSec = interviewList.length;
    const rejectedSec = rejectedList.length;

    if (currentStatus === 'all-btn') {
        theJobValue.innerText = `${totalInSec} jobs`;
    } 
    else if (currentStatus === 'interview-btn') {
        theJobValue.innerText = `${interviewSec} out of ${total} jobs`;
    } 
    else if (currentStatus === 'rejected-btn') {
        theJobValue.innerText = `${rejectedSec} out of ${total} jobs`;
    }
}


