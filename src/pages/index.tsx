import React, { useState } from 'react';
import type { NextPage } from 'next';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';

const Home: NextPage = () => {
  const [checked, setChecked] = React.useState(true);

  const preventDefault = (event: { preventDefault: () => any }) => event.preventDefault();

  return (
    <Wrapper>
      <Paper>
        <img src="./images/welcome.png" alt="Welcome!" />
      </Paper>
      <Container maxWidth="md">
        <div className="wrapper__content">
          <h3>Sign in to Minimal</h3>

          <form>
            <div className="form__login">
              <TextField id="outlined-basic" label="Your mail" variant="outlined" />

              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
              />
            </div>

            <div className="form__checkbox">
              <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />

              <Link href="#" onClick={preventDefault}>
                Forgot password?
              </Link>
            </div>

            <Button variant="contained" color="primary">
              Login
            </Button>
          </form>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;

  .MuiPaper-root {
    background-color: ${props => props.theme.colors.ivory};
    color: ${props => props.theme.colors.blackLight};
    background-image: none;
    overflow: hidden;
    box-shadow: rgb(145 158 171 / 20%) 0px 3px 1px -2px, rgb(145 158 171 / 14%) 0px 2px 2px 0px,
      rgb(145 158 171 / 12%) 0px 1px 5px 0px;
    border-radius: 16px;
    position: relative;
    width: 100%;
    max-width: 464px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 16px 0px 16px 16px;
  }

  .wrapper__content {
    max-width: 480px;
    margin: auto;
    min-height: 100vh;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    padding: 96px 0px;

    h3 {
      font-size: 24px;
      text-transform: uppercase;
    }
  }

  .form {
    &__login {
      display: flex;
      flex-direction: column;
      width: 100%;

      > div {
        margin: 10px 0;
      }

      input {
        width: 100%;
      }
    }

    &__checkbox {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }
  }

  button {
    background-color: ${props => props.theme.colors.backgroundBlue};
    width: 100%;
    padding: 10px 0;
  }
`;
export default Home;
