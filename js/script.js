export const scriptInit = () => {
    console.log("Create Functional")

    const tabBtn = document.querySelectorAll('.player-btn');
    const tabContent = document.querySelectorAll('.player-block')



    const deactivationPlayer = () => {
        tabBtn.forEach(function (currentTab) {
            currentTab.classList.remove('active')
        })
        tabContent.forEach(function (tabItem) {
            tabItem.classList.remove('active')
        })
    }


    tabBtn.forEach(function (itemTab, index) {
        itemTab.addEventListener('click', function () {
            /*tabBtn.forEach((currentTab) => {
                currentTab.classList.remove('active')
            }) */
            deactivationPlayer();
            tabBtn[index].classList.add('active')

            /*tabContent.forEach(function (tabItem) {
                tabItem.classList.remove('active')
            }) */

            tabContent[index].classList.add('active')


        })


    })

}