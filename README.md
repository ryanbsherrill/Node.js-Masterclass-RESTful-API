# Ups & Downs: RESTful API

#### 1. Listen on PORT and accept incoming HTTP requests for
  - [ ] POST
  - [ ] GET
  - [ ] PUT
  - [ ] DELETE
  - [ ] HEAD

#### 2. Allow a client to connect, then
  - [ ] create a new user
  - [ ] edit that user
  - [ ] delete that user

#### 3. Allow a user to
  - [ ] sign in
  - [ ] give them a token for subsequent auth requests

#### 4. Allow a user to sign out, which
  - [ ] invalidates their token

#### 5. Allow a signed-in user to
  - [ ] use their token to create a new check
  - [ ] define what up or down is

#### 6. Allow a signed-in user to
  - [ ] edit any of their checks
  - [ ] delete any of their checks
  - [ ] limit their checks to 5

#### 7. In the background, we want
  - [ ] workers to perform all the checks at the proper times
  - [ ] send alerts to a user when a check changes its state from up to down
  - [ ] send alerts to a user when a check changes its state from down to up
  - [ ] our checks to run once a minute