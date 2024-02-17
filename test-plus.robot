*** Settings ***
Library    RequestsLibrary

*** Test Cases ***
Test Plus Endpoint
    [Documentation]    Test the /plus/:a/:b endpoint
    ${resp}=     GET    http://localhost:5000/plus/3/4
    Should Be Equal     ${resp.status_code}    ${200}
    Should Be Equal As Numbers    ${resp.text}    ${7}
    Delete All Sessions

Test Plus Endpoint
    [Documentation]    Test the /plus/:a/:b endpoint
    ${resp}=     GET    http://localhost:5000/plus/2.5/4.2
    Should Be Equal     ${resp.status_code}    ${200}
    Should Be Equal As Numbers    ${resp.text}    ${6.7}
    Delete All Sessions

Test Plus Endpoint
    [Documentation]    Test the /plus/:a/:b endpoint
    ${resp}=     GET    http://localhost:5000/plus/3/-4
    Should Be Equal     ${resp.status_code}    ${200}
    Should Be Equal As Numbers    ${resp.text}    ${-1}
    Delete All Sessions
