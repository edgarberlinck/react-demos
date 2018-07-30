import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostShow extends Component {
    componentDidMount () {
        if (!this.props.post) {
            const { id } = this.props.match.params;
            this.props.fetchPost(id);
        }
    }

    onDeleteClick () {
        this.props.deletePost(this.props.match.params.id, () => this.props.history.push('/') );
    }

    render () {
        const { post } = this.props;

        if (!post) {
            return <div>Loading...</div>
        }

        return (
            <div> 
                <Link to="/">Back to Index</Link>
                <button 
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}
                > Delete Post</button>
                <h3>{post.title}</h3>
                <small>Categories: {post.categories}</small>
                <p>{post.content}</p>
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) {
    return {
        post: posts[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);