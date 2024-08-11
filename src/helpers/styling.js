import { css } from "styled-components";
import { BASE_STYLES } from "./constants";

export function getVariantButton(props) {
  if (props.variant === "icon") {
    return css`
      padding: 8px 14px;
      border: 1px solid ${BASE_STYLES.BROWN};
      border-radius: 6px;
      background: none;
      cursor: pointer;
      &:hover:not(:disabled) {
        background-color: ${BASE_STYLES.DARK_BROWN};
      }
      &:active:not(:disabled) {
        background-color: ${BASE_STYLES.LIGTH_BROWN};
      }
      &:disabled {
        border-color: ${BASE_STYLES.LIGTH_GREY};
        background-color: none;
        cursor: not-allowed;
      }
      &:disabled > svg > path {
        stroke: ${BASE_STYLES.LIGTH_GREY};
      }
      &:hover > svg > path {
        stroke: ${BASE_STYLES.LIGTH_GREY};
      }
    `;
  }

  if (props.variant === "primary") {
    return css`
      background-color: ${BASE_STYLES.BROWN};
      border: none;
      color: ${BASE_STYLES.WHITE};
      padding: 8px 16px;
      cursor: pointer;
      border-radius: 20px;
      font-weight: bold;
      &:hover:not(:disabled) {
        background-color: ${BASE_STYLES.DARK_BROWN};
      }
      &:active:not(:disabled) {
        background-color: ${BASE_STYLES.LIGTH_BROWN};
      }
      &:disabled {
        background-color: ${BASE_STYLES.LIGTH_GREY};
      }
    `;
  }

  if (props.variant === "outline") {
    return css`
      background-color: none;
      border: 1px solid ${BASE_STYLES.BROWN};
      color: ${BASE_STYLES.BROWN};
      padding: 8px 16px;
      cursor: pointer;
      border-radius: 20px;
      font-weight: bold;
      &:hover:not(:disabled) {
        color: ${BASE_STYLES.LIGTH_GREY};
        background-color: ${BASE_STYLES.BROWN};
      }
      &:active:not(:disabled) {
        color: ${BASE_STYLES.LIGTH_BROWN};
        background-color: ${BASE_STYLES.LIGTH_BROWN};
      }
      &:disabled {
        background-color: none;
        border: 1px solid ${BASE_STYLES.LIGTH_GREY};
        color: ${BASE_STYLES.LIGTH_GREY};
        cursor: not-allowed;
      }
    `;
  }
}
