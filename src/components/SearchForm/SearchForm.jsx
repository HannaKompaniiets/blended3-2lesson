import { Component } from 'react';
import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export class SearchForm extends Component {
  state = {
    query: '',
  };

  // static propTypes = {
  //   onSubmit: PropTypes.func.isRequired,
  // };

  handleInput = event => {
    this.setState({
      query: event.currentTarget.value.toLowerCase().trim(),
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { query } = this.state;

    this.props.onSubmit(query);

    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <SearchFormStyled onSubmit={this.handleSubmit}>
        <FormBtn type="submit">
          <FiSearch size="16px" />
        </FormBtn>
        <InputSearch
          value={query}
          onChange={this.handleInput}
          placeholder="What do you want to write?"
          name="search"
          required
          autoFocus
        />
      </SearchFormStyled>
    );
  }
}


SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}