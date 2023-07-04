import styled from 'styled-components';

export const ToggleSwitch = styled.div`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
  margin: 0 0.75rem;
`;

export const ToggleInput = styled.input`
  display: none;
`;

export const SwitchStyle = styled.span`
  position: absolute;
  cursor: pointer;
  background-color: #b6b6b6;
  border-radius: 25px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: background-color 0.2s ease;
`;

export const SwitchHandle = styled.span`
  position: absolute;
  content: "";
  left: 2px;
  top: 2px;
  width: 21px;
  height: 21px;
  background-color: #333;
  border-radius: 50%;
  transition: transform 0.3s ease;
`;

export const CheckedSwitchHandle = styled(SwitchHandle)`
  transform: translateX(25px);
  background-color: #333;
`;

export const CheckedSwitch = styled(SwitchStyle)`
  background-color: #2bc6ff;
`;
