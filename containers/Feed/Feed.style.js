import styled from "styled-components";
import { BLUE } from "../../styles/colors";

export const FeedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;

  .feedThumbnail {
    min-height: 600px;
    width: 800px;
    background: white;
    border-radius: 15px;
    box-shadow: 0px 5px 10px grey;

    .header {
      display: flex;
      justify-content: space-between;
      min-height: 150px;
      padding: 20px;
      .userReview {
        .user {
          display: flex;
          margin-bottom: 30px;
          .avatar {
            width: 50px;
            height: 50px;
            background: grey;
            border-radius: 50%;
            margin-right: 10px;
          }
          > .name {
            display: flex;
            flex-direction: column;
            justify-content: center;
            p {
              margin: 0px;
            }
            .name {
              font-weight: bold;
            }
            .publicationDate {
            }
          }
        }
      }
      .beerGlobals {
        .beerName {
        }
        .beerType {
        }
        .beerDegree {
        }
      }
    }
    .photo {
      height: 400px;
      background: grey;
    }

    .footer {
      height: 50px;
    }
  }
`;
