import React from "react"
import styled from "styled-components"

const Field = styled.div`
  width: 100%;
  margin-bottom: 16px;
`

const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  font-weight: 600;
`

const Input = styled.input`
  background: var(--color-light);
  border: 2px solid transparent;
  border-radius: 2px;
  height: 56px;
  font-family: var(--font-stack);

  font-size: 18px;
  font-weight: 400;
  outline: none;
  opacity: 0.6;
  padding: 8px;
  transition: 160ms;
  width: 100%;

  &:focus,
  &:active {
    opacity: 1;
  }
`

const Textarea = styled.textarea`
  background: var(--color-light);
  border: 2px solid transparent;
  border-radius: 2px;
  font-family: var(--font-stack);
  font-size: 18px;
  font-weight: 400;
  height: 128px;
  outline: none;
  opacity: 0.6;
  padding: 8px;
  resize: none;
  width: 100%;
  transition: 160ms;

  &:focus,
  &:active {
    opacity: 1;
  }
`

const Button = styled.button`
  background: transparent;
  border: 3px solid var(--color-light);
  border-radius: 2px;
  color: var(--color-light);
  cursor: pointer;
  font-family: var(--font-stack);
  font-size: 1rem;
  font-weight: 600;
  outline: none;
  height: 56px;
  width: 100%;
  transition: 200ms;

  &:hover,
  &:focus {
    background: var(--color-light);
    color: var(--color-dark);
    mix-blend-mode: lighten;
  }
`

const ContactWrapper = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 720px;
  margin: auto;
  padding: 32px 16px;
`

const Contact = () => (
  <ContactWrapper>
    <h1>Get in touch</h1>
    <form
      action="https://getform.io/f/120128c8-0857-4706-9509-059d5ff49793"
      method="POST"
    >
      <Field>
        <Label htmlFor="name">Name</Label>
        <Input type="text" name="name" id="name" required />
      </Field>
      <Field>
        <Label htmlFor="email">Email address</Label>
        <Input type="email" name="email" id="email" required />
      </Field>
      <Field>
        <Label htmlFor="message">Message</Label>
        <Textarea name="message" id="message" required></Textarea>
      </Field>
      <Button type="submit">Send</Button>
    </form>
  </ContactWrapper>
)

export default Contact
