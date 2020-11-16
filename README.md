# what is this 

this is a text style which will give u a fade out transaction on text 

# installation

'npm install appearfont'


# options
'use = true'

# also add this im ur css file
...
span{
    opacity : 0;
    transition: all 1s ease;
    transform: translateY(50px);
}

span.fade{
    opacity: 1;
    transform: translateY(0px);
}
...