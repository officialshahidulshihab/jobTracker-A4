let interviewList=[];
let rejectedList=[];
let total=8;

let currentStatus = 'all-btn'
const allSection=getAnyElementById('job-des-sec')
const allBtn =getAnyElementById('all-btn')
const interviewBtn =getAnyElementById('interview-btn')
const rejectionBtn=getAnyElementById('rejected-btn')
const jobDesSec =getAnyElementById('job-des-sec')
const interviewTap =getAnyElementById('the-hidden-gem')
const rejectedTap=getAnyElementById('the-hidden-gem-2')
const mainContainer = document.querySelector('main');
const numberOfTotal =getAnyElementById('number-count-total')
const numberOfInterview=getAnyElementById('number-count-interview')
const numberOfRejected=getAnyElementById('number-count-rejected')





function calculateCount(){
    // numberOfTotal.innerText=jobDesSec.children.length;
    numberOfTotal.innerText=total;
    numberOfInterview.innerText=interviewList.length
    numberOfRejected.innerText=rejectedList.length
}

calculateCount();

function btnHandle(id){
    allBtn.classList.add('bg-base-200', 'text-[#64748B]')
    interviewBtn.classList.add('bg-base-200', 'text-[#64748B]')
    rejectionBtn.classList.add('bg-base-200', 'text-[#64748B]')

    allBtn.classList.remove('bg-primary', 'text-white')
    interviewBtn.classList.remove('bg-primary', 'text-white')
    rejectionBtn.classList.remove('bg-primary', 'text-white')

    const selected =document.getElementById(id);
    selected.classList.remove('bg-base-200', 'text-[#64748B]')
    selected.classList.add('bg-primary', 'text-white')
    currentStatus =id
    
    

    if(id==='interview-btn'){
        jobDesSec.classList.add('hidden')
        rejectedTap.classList.add('hidden')
        interviewTap.classList.remove('hidden')
        defaultShowInterview()
    }else if(id==='all-btn'){
        rejectedTap.classList.add('hidden')
        interviewTap.classList.add('hidden')
        jobDesSec.classList.remove('hidden')


    }else if(id==='rejected-btn'){
        jobDesSec.classList.add('hidden')
         interviewTap.classList.add('hidden')
         rejectedTap.classList.remove('hidden')
         defaultShowRejected()


    }

}

mainContainer.addEventListener('click', function(event){
    
    
    if(event.target.classList.contains('my-interview-btn')){
        const nodeParent =event.target.parentNode.parentNode

        const company=nodeParent.querySelector('.name-of-company').innerText
        const role=nodeParent.querySelector('.name-of-role').innerText
        const location=nodeParent.querySelector('.name-of-location').innerText
        const jobDescription =nodeParent.querySelector('.name-of-job-des').innerText
        const status=nodeParent.querySelector('.name-of-status').innerText

        nodeParent.querySelector('.name-of-status').innerText='InterView'
        
        const jobInfo = {
            company,
            role,
            location,
            status: 'Interview',
            jobDescription
        }
        
        const jobExist = interviewList.find(item => item.company ===jobInfo.company)

        if(!jobExist){
            interviewList.push(jobInfo)
        }
        rejectedList = rejectedList.filter(item => item.company !=jobInfo.company);

        


        if(currentStatus==='rejected-btn'){
            defaultShowRejected()
        }
        calculateCount()

    }else if(event.target.classList.contains('my-rejected-btn')){
        const nodeParent = event.target.parentNode.parentNode

        const company=nodeParent.querySelector('.name-of-company').innerText
        const role=nodeParent.querySelector('.name-of-role').innerText
        const location=nodeParent.querySelector('.name-of-location').innerText
        const status=nodeParent.querySelector('.name-of-status').innerText
        const jobDescription =nodeParent.querySelector('.name-of-job-des').innerText

        nodeParent.querySelector('.name-of-status').innerText='Rejected'

        const jobInfo = {
            company,
            role,
            location,
            status: 'Rejected',
            jobDescription
        }

        const jobExist = rejectedList.find(item => item.company == jobInfo.company)

        if(!jobExist){
            rejectedList.push(jobInfo)
        }
        interviewList = interviewList.filter(item => item.company !=jobInfo.company);
        

        if(currentStatus==='interview-btn'){
            defaultShowInterview()
        }

        calculateCount()

    }
    if (event.target.closest('.delete-btn') || event.target.closest('.fa-regular')) {
    const card = event.target.closest('.card');

    const company = card.querySelector('.name-of-company').innerText;

    
    interviewList = interviewList.filter(item => item.company !== company);

    
    rejectedList = rejectedList.filter(item => item.company !== company);

    
    card.remove();
    total--;

    
    if (currentStatus === 'interview-btn') {
        defaultShowInterview();
    }
    if (currentStatus === 'rejected-btn') {
        defaultShowRejected();
    }

    calculateCount();
    return;
}

})



function defaultShowInterview(){
    interviewTap.innerHTML=''
    if(interviewList.length===0){
        interviewTap.innerHTML=`
        <div class="card bg-base-100  shadow-sm  p-[100px]">
            <div class="w-[100px] mx-auto mb-5">
                <img src="./jobs.png" alt="" >
            </div>
            <div class="text-center space-y-1">
                <h1 class="text-[24px] font-semibold text-[#002C5C]">No jobs available</h1>
                <p class="text-[#64748B]">Check back soon for new job opportunities</p>
            </div>






        </div>
        
        
        `
        return;
    }
    for(let interview of interviewList){
        let div =document.createElement('div');
        div.className='card bg-base-100 shadow-sm p-5'
        div.innerHTML=`
        <div class="flex justify-between">
                <div class="space-x-2">
                    <h1 class="text-[18px] text-[#002C5C] font-semibold mb-1 name-of-company">${interview.company}</h1>
                    <p class="text-[#64748B] mb-5 name-of-role">${interview.role}</p>
                    <p class="text-[14px] text-[#64748B] mb-5 name-of-location">${interview.location}</p>
                    <p class="bg-[#EEF4FF] text-[14px] text-[#002C5C] font-medium p-2 rounded-sm inline-block mb-2 name-of-status">${interview.status}</p>
                    <p class="text-[#323B49] text-[14px] mb-5 name-of-job-des">${interview.jobDescription}</p>
                    <button class="btn my-interview-btn text-[#10B981] text-[14px] font-semibold border-[#10B981]">Interview</button>
                    <button class="btn my-rejected-btn text-[#EF4444] text-[14px] font-semibold border-[#EF4444]">Rejected</button>
                </div>
                <div>
                    <button class="btn rounded-[50%] delete-btn"><i class="fa-regular fa-trash-can"></i></button>
                </div>
            </div>
        
        `
        interviewTap.appendChild(div)

    }


}

function defaultShowRejected(){
    rejectedTap.innerHTML=''
    if(rejectedList.length===0){
        rejectedTap.innerHTML=`
        <div class="card bg-base-100  shadow-sm  p-[100px]">
            <div class="w-[100px] mx-auto mb-5">
                <img src="./jobs.png" alt="" >
            </div>
            <div class="text-center space-y-1">
                <h1 class="text-[24px] font-semibold text-[#002C5C]">No jobs available</h1>
                <p class="text-[#64748B]">Check back soon for new job opportunities</p>
            </div>






        </div>
        
        
        `
        return;
    }

    for(let reject of rejectedList){
        let div =document.createElement('div');
        div.className='card bg-base-100 shadow-sm p-5'
        div.innerHTML=`
        <div class="flex justify-between">
                <div class="space-x-2">
                    <h1 class="text-[18px] text-[#002C5C] font-semibold mb-1 name-of-company">${reject.company}</h1>
                    <p class="text-[#64748B] mb-5 name-of-role">${reject.role}</p>
                    <p class="text-[14px] text-[#64748B] mb-5 name-of-location">${reject.location}</p>
                    <p class="bg-[#EEF4FF] text-[14px] text-[#002C5C] font-medium p-2 rounded-sm inline-block mb-2 name-of-status">${reject.status}</p>
                    <p class="text-[#323B49] text-[14px] mb-5 name-of-job-des">${reject.jobDescription}</p>
                    <button class="btn my-interview-btn text-[#10B981] text-[14px] font-semibold border-[#10B981]">Interview</button>
                    <button class="btn my-rejected-btn text-[#EF4444] text-[14px] font-semibold border-[#EF4444]">Rejected</button>
                </div>
                <div>
                    <button class="btn rounded-[50%] delete-btn"><i class="fa-regular fa-trash-can"></i></button>
                </div>
            </div>
        
        `
        rejectedTap.appendChild(div)

    }

}