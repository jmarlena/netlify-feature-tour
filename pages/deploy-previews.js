import Layout from '../components/layout';

export default function FunctionsPage() {
  return (
    <Layout
      title="Deploy Previews"
      description="See and share your changes in a production environment so you can ship with confidence. Gather feedback in your preferred project management tool right through your deploy previews!"
    >
      <main>
        <h2>Try out deploy previews.</h2>
        <ol>
          <li>
            Create a new branch in your repo called{' '}
            <code>deploy-preview-test</code>.
          </li>
          <li>
            Edit <code>pages/deploy-previews.js</code> to edit the headline "Try
            out deploy previews." so it reads, "This is a deploy preview!"
          </li>
          <li>Save the change, commit it, and push it to your GitHub repo.</li>
          <li>
            Open a pull request against the <code>main</code> branch from the{' '}
            <code>deploy-preview-test</code> branch.
          </li>
          <li>
            Visit <a href="https://app.netlify.com">app.netlify.com</a> —
            Netlify will automatically build the deploy preview.
          </li>
          <li>
            Once the site is done building, visit the generated URL to see your
            changes!
          </li>
        </ol>
      </main>
    </Layout>
  );
}
