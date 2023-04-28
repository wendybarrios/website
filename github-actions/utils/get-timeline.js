// Mine
async function getTimeline(issueNum) {
    let arra = []
    let page = 1
    while (true) {
      try {
        const results = await github.issues.listEventsForTimeline({
          owner: context.repo.owner,
          repo: context.repo.repo,
          issue_number: issueNum,
          per_page: 100,
          page: page,
        });
        if (results.data.length) {
          arra = arra.concat(results.data);
        } else {
          break
        }
      } catch (err) {
        console.log(error);
        continue
      }
      finally {
        page++
      }
    }
    return arra
  }

module.exports = { getTimeline };