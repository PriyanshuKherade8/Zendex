import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Tooltip } from "@mui/material";
import styled from "styled-components";

// import { removeExtraSpaces } from "../../../utils";
// import Typography from "../../Typography/Typography";
import { CustomLabel, TextInput } from "./style";

const Input = ({
  blockDetails,
  editDetails,
  id,
  label,
  required,
  onChange,
  onFocus,
  onBlur,
  name,
  value,
  error,
  inputRef,
  disabled,
  type = "text",
  defaultValue,
  isRequired,
  onEdit,
  icon,
  labelStyle,
  noFocusChange,
  proposalRead,
  fontSize,
  themeType,
  readOnly,
  testId,
  capitalize,
  disableMarginTop,
  description,
  errors,
  watch,
  numberToWord = false,
  Width,
  minHeight,
  borderNone,
  endAddornmentText,
  onKeyDown,
  disableOnPaste,
  ...rest
}) => {
  //   const { Error } = Typography;

  const handleInputChange = (e) => {
    let value = e.target.value;
    e.target.value = capitalize
      ? value.charAt(0).toUpperCase() + value.slice(1)
      : value;
  };

  //   const handleCombinedBlur = (e) => {
  //     e.target.value = removeExtraSpaces(e?.target?.value);
  //     inputRef?.onBlur(e);
  //     if (onBlur && typeof onBlur === "function") {
  //       onBlur(e);
  //     }
  //   };

  //   const numberAcronym = numberToWord ? acronymFormatValue(fieldValue) : "";
  // const numberInWords = numberToWord
  //   ? convertNumberToWord(Number(fieldValue))
  //   : "";

  return (
    <InputContainer Width={Width} minHeight={minHeight}>
      {label && (
        <CustomLabel htmlFor={id} title={label}>
          {/* {label?.length > 55 ? `${label.slice(0, 60)}...` : */}
          {label}
          {/* } */}
          {isRequired && <span className="required">*</span>}
          {description && !proposalRead && (
            <Tooltip title={description} arrow placement="top">
              <InfoOutlinedIcon
                sx={{
                  fontSize: "12px",
                  marginLeft: "3px",
                  position: "relative",
                  top: "2px",
                }}
              />
            </Tooltip>
          )}
        </CustomLabel>
      )}
      {proposalRead ? (
        <></>
      ) : (
        <div
          style={{
            position: "relative",
            // backgroundColor: readOnly ? "#E2E2E2" : "red",
          }}
        >
          <TextInput
            {...inputRef}
            editDetails
            blockDetails={blockDetails}
            name={name}
            type={type}
            disabled={disabled}
            required={required}
            onKeyUp={(e) => handleInputChange(e)}
            onChange={(e) => [
              inputRef?.onChange && inputRef.onChange(e),
              onChange && onChange(e),
            ]}
            onKeyDown={(e) => (onKeyDown ? onKeyDown(e) : undefined)}
            placeholder=" "
            id={id}
            onFocus={onFocus}
            // onBlur={handleCombinedBlur}
            defaultValue={defaultValue}
            value={value}
            // error={error || errorMessage}
            readOnly={readOnly}
            proposalRead={proposalRead}
            data-testid={testId}
            onPaste={(e) => (disableOnPaste ? e.preventDefault() : undefined)}
            {...rest}
          />
          {icon && (
            <i
              className={icon}
              style={{
                position: "absolute",
                top: "30px",
                right: "35px",
                fontSize: fontSize ? `calc(15px + ${fontSize - 92}%)` : "15px",
                cursor: "pointer",
              }}
              onClick={() => {
                onEdit && onEdit();
              }}
            ></i>
          )}
          {/* {!!errorMessage && <Error>{errorMessage}</Error>} */}

          {/* {numberToWord && <ToWord>{numberInWords}</ToWord>} */}
          {endAddornmentText && (
            <EndAddornment>{endAddornmentText}</EndAddornment>
          )}
        </div>
      )}
    </InputContainer>
  );
};

export default Input;

const InputContainer = styled.div`
  position: relative;
  min-height: ${({ minHeight }) => (minHeight ? `${minHeight}px` : "62px")};
  width: ${({ Width }) => (Width ? Width && `${Width}px` : "100%")};
`;

const EndAddornment = styled.span`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  margin-right: 10px;
  font-size: 12px;
  color: #808080;
`;
