import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList () {
        return this.props.books.map(book => <li 
            key={book.title} 
            className="list-group-item"
            onClick={ () => this.props.selectBook(book) }>{book.title}
        </li>)
    }
    
    render () {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    }    
}

// Todo retorno desta função acabará no props do BookList container
function mapDispatchToProps (dispatch) {
    // Quando selectBook for invocado, o resultado será passado para todos
    // os reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// Promove BookList de Componente a Container - Ele precisa saber a respeito
// deste novo método, selectBook. Disponibilizar como prop
export default connect (mapStateToProps, mapDispatchToProps)(BookList);