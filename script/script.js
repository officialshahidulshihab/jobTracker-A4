const interviewList=[];
const rejectedList=[];
const allSection=getAnyElementById('job-des-sec')
const allBtn =getAnyElementById('all-btn')
const interviewBtn =getAnyElementById('interview-btn')
const rejectionBtn=getAnyElementById('rejected-btn')
const jobDesSec =getAnyElementById('job-des-sec')
const interviewTap =getAnyElementById('the-hidden-gem')
const rejectedTap =getAnyElementById('the-hidden-gem-rej')
const numberOfTotal =getAnyElementById('number-count-total')
const numberOfInterview=getAnyElementById('number-count-interview')
const numberOfRejected=getAnyElementById('number-count-rejected')
const nameOfCompany =getAnyElementByClassName('name-of-company')
const nameOfRole=getAnyElementByClassName('name-of-role')
const nameOfLocation=getAnyElementByClassName('name-of-location')
const nameOfStatus=getAnyElementByClassName('name-of-status')
const nameOfJobSecDec=getAnyElementByClassName('name-of-job-des')
const nameOfDeleteBtn=getAnyElementByClassName('delete-btn')



function calculateCount(){
    numberOfTotal.innerText =jobDesSec.children.length;
    numberOfInterview.innerText=interviewList.length;
    numberOfRejected.innerText=rejectedList.length;
}
calculateCount();