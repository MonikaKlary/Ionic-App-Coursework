const usernameLabel = document.getElementById('lbl-username');
const addGratitudeBtn = document.getElementById('btn-add-to-log');
const gratitudeList = document.getElementById('list-output');
const gratitudeInput = document.getElementById('gratitude-input');
const clearLogBtn = document.getElementById('btn-clear-log');

usernameLabel.textContent = "Hello " + localStorage.getItem('Username');

addGratitudeBtn.addEventListener('click', addItemToList);
clearLogBtn.addEventListener('click', clearGratitudeLog);

let storedEntries = localStorage.getItem('StoredGratitudes');
if ( storedEntries == null )
{
    storedEntries = [];
}

loadList();


function loadList()
{
    //loop backwards over the stored list to add them in order
    for ( let i = storedEntries.length - 1; i >= 0; i--)
    {
        let currentEntry = storedEntries[i];

        //hack to get around the , being added to the HTML list for some reason?
        if ( currentEntry != ',')
        {
            let newItem = document.createElement('ion-item');
            newItem.textContent = currentEntry;
            //add new HTML child at start of list
            gratitudeList.prepend(newItem);
        }
    }
}

function addItemToList()
{
    let inputValue = gratitudeInput.value;

    if ( inputValue != "" )
    {
        //add new item visually to list
        let newItem = document.createElement('ion-item');
        newItem.textContent = inputValue;
        clearInput();

        //add new item to our list stored in local storage
        storedEntries.unshift(inputValue);

        //If more than 7 entries in the stored list then we need to remove it from the HTML and the stored list
        if ( storedEntries.length > 7 )
        {
            storedEntries.pop();
            gratitudeList.removeChild( gratitudeList.lastChild );
        }

        //add new HTML child at start of list
        gratitudeList.prepend(newItem);

        //save our stored list
        localStorage.setItem('StoredGratitudes', storedEntries);
    }
    else
    {
        console.log("Attempted to add empty value to list, do nothing");
    }
};

function clearInput()
{
    gratitudeInput.value ="";
};

function clearGratitudeLog()
{
    storedEntries = [];

    while(gratitudeList.firstChild)
    {
        gratitudeList.removeChild(gratitudeList.firstChild);
    }

    localStorage.setItem('StoredGratitudes', storedEntries);

};