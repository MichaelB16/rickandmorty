import { gql } from '@apollo/client/core';

const CHARACTER_FIELDS = gql`
  fragment CharacterFields on Character {
    id
    name
    image
    status
    gender
    species
    location {
      ...LocationFields
    }
  }
`;

const LOCATION_FIELDS = gql`
  fragment LocationFields on Location {
    id
    name
    dimension
  }
`;

export const GET_LIST_CHARACTERS = gql`
  ${CHARACTER_FIELDS}
  ${LOCATION_FIELDS}

  query ($page: Int = 1, $filter: FilterCharacter = { name: "" }) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        ...CharacterFields
      }
    }
  }
`;

export const GET_FIND_CHARACTER = gql`
  ${CHARACTER_FIELDS}
  ${LOCATION_FIELDS}
  query ($id: ID!) {
    character(id: $id) {
      ...CharacterFields
      episode {
        name
        air_date
        episode
        created
      }
    }
  }
`;
