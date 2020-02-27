var mongoose = require('mongoose');

require('../mongodb_helper')
var Blog = require('../../models/blog');

describe('Blog model', function() {
  beforeEach(function(done) {
      mongoose.connection.collections.blogs.drop(function() {
          done();
      });
  });

  it('has a review', function() {
    var blog = new Blog({ movie:'some movie', review: 'my review', user: 'some user' });
    expect(blog.movie).toEqual('some movie');
    expect(blog.review).toEqual('my review');
    expect(blog.user).toEqual('some user');
  });

  it('can list all blog posts', function(done) {
    Blog.find(function(err, blogs) {
      expect(err).toBeNull();
      expect(blogs).toEqual([]);
      done();
    });
  });

  it('can save a blog post', function(done) {
    var blog = new Blog({ movie:'some movie', review: 'my review', user: 'some user' });

    blog.save(function(err) {
      expect(err).toBeNull();

      Blog.find(function(err, blog) {
        expect(err).toBeNull();

        expect(blog[0]).toMatchObject({ movie:'some movie', review: 'my review', user: 'some user' });
        done();
      });
    });
  });
});
