// *********** open sidebar ************

// select items
const sidebar = document.querySelector('.sidebar');
const openBtn = document.querySelector('.open-btn');
const leftIcon = document.querySelector('#left');
const rightIcon = document.querySelector('#right');

// open sidebar addEventListener
openBtn.addEventListener('click', openSidebar);

// function

function openSidebar() {
  if (sidebar.classList.contains('sidebar-close')) {
    sidebar.classList.remove('sidebar-close');
    leftIcon.classList.remove('invisible');
    leftIcon.classList.add('visible');
    rightIcon.classList.remove('visible');
    rightIcon.classList.add('invisible');
  } else {
    sidebar.classList.add('sidebar-close');
    leftIcon.classList.add('invisible');
    leftIcon.classList.remove('visible');
    rightIcon.classList.add('visible');
    rightIcon.classList.remove('invisible');
  }
}

// *********** end of open sidebar ************

// *********** show info ************

// select items

const sidebarLinks = document.querySelectorAll('.link')
const mainCenter = document.querySelector('.main-center')

// show items

function showTitle(data){
  let dispalyTitle = data.map((item)=>{
    return `
    <h3 class="title" data-number="${item.number}" data-id="${item.id}">${item.title}</h3>
    `;
  })
  dispalyTitle = dispalyTitle.join("");
  mainCenter.innerHTML = dispalyTitle;

  // show specific info
  const headingLinks = document.querySelectorAll('.title');
  headingLinks.forEach((link) => {
    link.addEventListener('click',(e) => {
      const category = e.currentTarget.dataset.number;
      const workDescription = work.filter((workItem) => {
        // const {id,description} = work
        if (workItem.number === category) {
          console.log(workItem.description);
          return workItem.description;
        }
      });
      let dispalyInfo = workDescription.map((item) => {
          return `
          <ul>
            ${item.description}
          </ul>
          `;
      });
      dispalyInfo = dispalyInfo.join('');
      mainCenter.innerHTML = dispalyInfo;
    })
  })
}

// filter items

sidebarLinks.forEach((link) => {
  link.addEventListener('click', openSidebar)
  link.addEventListener('click', (e)=>{
    const category = e.currentTarget.dataset.id;
    const workTitle = work.filter((workItem)=>{
      if(workItem.id === category){
        return workItem.title
      }
    })
    showTitle(workTitle)
    
  })
})

