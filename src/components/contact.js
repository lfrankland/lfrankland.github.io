// import React from 'react'
// import styled from 'styled-components'
// import { Text } from './text'

// const Field = styled.div`
//   margin-bottom: 16px;
//   width: 100%;
// `

// const Label = styled.label`
//   display: block;
//   font-weight: 600;
//   margin-bottom: 4px;
// `

// const Input = styled.input`
//   background-color: var(--color-light);
//   border-radius: 2px;
//   border: 2px solid transparent;
//   font-family: var(--font-stack);
//   font-size: 18px;
//   font-weight: 400;
//   height: 56px;
//   opacity: 0.6;
//   outline: none;
//   padding: 8px;
//   transition: 160ms;
//   width: 100%;

//   &:focus,
//   &:active {
//     opacity: 1;
//   }
// `

// const Textarea = styled.textarea`
//   background-color: var(--color-light);
//   border-radius: 2px;
//   border: 2px solid transparent;
//   font-family: var(--font-stack);
//   font-size: 18px;
//   font-weight: 400;
//   height: 128px;
//   opacity: 0.6;
//   outline: none;
//   padding: 8px;
//   resize: none;
//   transition: 160ms;
//   width: 100%;

//   &:focus,
//   &:active {
//     opacity: 1;
//   }
// `

// const Button = styled.button`
//   background-color: transparent;
//   border-radius: 2px;
//   border: 3px solid var(--color-light);
//   color: var(--color-light);
//   cursor: pointer;
//   font-family: var(--font-stack);
//   font-size: 1rem;
//   font-weight: 600;
//   height: 56px;
//   outline: none;
//   transition: 200ms;
//   width: 100%;

//   &:hover,
//   &:focus {
//     background: var(--color-light);
//     color: var(--color-dark);
//     mix-blend-mode: lighten;
//   }
// `

// const Wrapper = styled.main`
//   display: flex;
//   flex-direction: column;
//   margin: auto;
//   max-width: 720px;
//   padding: 32px 16px;
// `

// export function Contact() {
//   return (
//     <Wrapper>
//       <Text color="light" size="heading1">
//         Get in touch
//       </Text>

//       <form
//         action="https://getform.io/f/120128c8-0857-4706-9509-059d5ff49793"
//         method="POST"
//       >
//         <Field>
//           <Label htmlFor="name">Name</Label>
//           <Input type="text" name="name" id="name" required />
//         </Field>

//         <Field>
//           <Label htmlFor="email">Email address</Label>
//           <Input type="email" name="email" id="email" required />
//         </Field>

//         <Field>
//           <Label htmlFor="message">Message</Label>
//           <Textarea name="message" id="message" required></Textarea>
//         </Field>

//         <Button type="submit">Send</Button>
//       </form>
//     </Wrapper>
//   )
// }
