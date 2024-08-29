import { useRef } from "react";
import styled from "styled-components";
import DatePicker, { CalendarContainer } from "react-datepicker";

import { Colors } from "../../helpers/utils";
import CalendarIcon from "../../assets/calendar.png";

import "react-datepicker/dist/react-datepicker.css";

interface Props {
  value?: Date | null;
  onChange?: (date: Date | null) => void;
}

export const DatePickerInput = ({ value = new Date(), onChange }: Props) => {
  const datePickerContainerRef = useRef<HTMLDivElement>(null);

  return (
    <DatePickerContainer ref={datePickerContainerRef}>
      <DatePicker
        selected={value}
        placeholderText="dd/mm/yyyy"
        onChange={onChange}
        className="date_picker"
        showPopperArrow={false}
        calendarContainer={({ children, className }) => (
          <div
            style={{
              position: "relative",
              transform: "translate(70%, 9px)",
            }}
          >
            <CalendarContainer className={className}>
              {children}
            </CalendarContainer>
          </div>
        )}
        onFocus={() =>
          datePickerContainerRef.current?.classList.add("outlined")
        }
        onBlur={() =>
          datePickerContainerRef.current?.classList.remove("outlined")
        }
      />
    </DatePickerContainer>
  );
};

const DatePickerContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${Colors.primary.grayLight};
  border-radius: 5px;
  padding: 10px 12px;

  & .react-datepicker-wrapper {
    width: 100px;
  }

  & .date_picker {
    border: none;
    outline: none;
    color: ${Colors.primary.grayDark};
    width: 100%;
  }

  &:after {
    content: "";
    display: inline-block;
    background-image: url(${CalendarIcon});
    background-size: contain;
    background-repeat: no-repeat;
    width: 16px;
    height: 16px;
  }

  &.outlined {
    outline: 2px solid black;
  }
`;
