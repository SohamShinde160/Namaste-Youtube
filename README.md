## Youtube

- Header
- Body
    - Sidebar
        - MenuItem
    - MainContainer
        - ButtonsList
        - VideoConatiner
            - VideoCard

## Debouncing:-
- if you are typing very slow - the diff betn the key stroke is 200ms - very low
- if you are typing very fast - the diff betn the key stroke is 50ms - very high
    & if you are typing very fast , you don't need suggestion for result
    hence it is useless to call API at every stroke

-    performance :-
        - eg word :=> iphone pro max = 14 letters (14 API call) * 1000 people = 14k API Call 
        - eg word :=> iphone pro max = 14 letters (3 API call) * 1000 people = 3k API Call   ( using debouncing )


## Debouncing with 200ms 
    - if difference between the 2 key stroke is less than < 200ms  -- then decline the API CALL
    - it means you are typing very fast



## Live chat >>>>> Infinite Scroll >>>>>> Pagination

-- Challenges of live chat
    -- get data live 
    -- update the UI with the data

2 ways to handle live data
 - Web Sockets :- 2 way connection betn server & UI (handshake communication) 
                    as soon as website is opened connection is established and u can easily send data (no regular Interval) --- time critical (near to the real time)
                    Initial Connection takes time & onces the connection is established now you can send data in any dirn , anywhere you want 
Application like :- live trading platform (zerodha , kite ) crypto currency uses Web Sockets
Also Application like :- Whatsapp


 - API Polling (long polling):- UI req the sever & data flows from sever to UI (1D) (regular Interval)
                                Unidirectional.
                                UI will keep polling data from server after every regular interval 
                                (eg:-Gmail) ( Cricket , Espn ) (YT comments)
