import React from "react";
import styled from "styled-components";

const Textarea = React.forwardRef(
  (
    {
      label,
      id,
      name,
      value,
      onChange,
      onBlur,
      onFocus,
      required,
      disabled,
      placeholder,
      readOnly,
      errors,
      error,
      proposalRead,
      watch,
      ...rest
    },
    ref
  ) => {
    return (
      <>
        <TextareaContainer>
          {label && (
            <CustomLabel htmlFor={id}>
              {label}
              {required && !proposalRead && <span className="required">*</span>}
            </CustomLabel>
          )}
          {proposalRead ? (
            <></>
          ) : (
            <>
              <StyledTextarea
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                required={required}
                disabled={disabled}
                placeholder={placeholder}
                readOnly={readOnly}
                ref={ref}
                {...rest}
              />
            </>
          )}
        </TextareaContainer>
      </>
    );
  }
);

// Add display name for better debugging
Textarea.displayName = "Textarea";

export default Textarea;

const TextareaContainer = styled.div`
  margin-bottom: 16px;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 10px;
  font-size: 14px;
  font-family: system-ui;
  border: ${({ error }) => (error ? "1px solid red" : "1px solid #A9A7A7")};
  border-radius: 4px;
  resize: vertical;
  &:focus {
    outline: none;
    border: 1px solid
      ${({ error, theme }) => (error ? "red" : `${theme.primaryColor}`)};
  }
  &:disabled {
    background-color: #f7f7f7;
  }
`;
export const CustomLabel = styled.label`
  color: ${({ theme }) =>
    theme.primaryColor ? `${theme.primaryColor} !important` : "rgb(0,0,0)"};
  padding-left: 1px;
  font-size: 14px;
  font-family: system-ui;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  display: inline-block;
`;
