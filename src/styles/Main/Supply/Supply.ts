import styled from 'styled-components'

export const SupplyContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    table {
    border-spacing: 0;
    border: 1px solid black;
    font-size: 14px;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`
export const DelivererButton = styled.button`
  width:200px;
  height: 50px;
`
export const Input = styled.input`
  width:200px;
  height: 50px;
`
export const ApplyButton = styled.button`
  width:50px;
  height: 50px;
`
export const AlertMessage = styled.p`
  width:100%;
  justify-content: center;
  font-size: 24px;
`