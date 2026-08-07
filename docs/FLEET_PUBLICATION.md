# MemeBank canonical fleet publication

- Repository: `memebank/memebank.github.io`
- Repository URL: https://github.com/memebank/memebank.github.io
- Role: `Astro marketing, documentation, privacy, support, and download site`
- Visibility: `private`
- Approved source tree: `01cfa4b0d36b60d281a87d53b35e8d1e53b2ba94`
- Approved source head: `b693ba989b775b4ea280e75c86a809479d073b80`
- Source archive SHA-256: `b451cce7de72ce67ad7dd135db794d54f34ff6b83c2d5bf8a7c0baf6df91b167`
- GitHub Project: [memebank-project](https://github.com/orgs/memebank/projects/1)
- Linear tracking: `DEN-1004, DEN-1005, DEN-1043, DEN-319, DEN-1011, DEN-1018`

## Authority and migration boundary

The sealed source-v2 carrier is maintained in `ORESoftware/ai-agent-coordinator.rs`.
The approved source commit was published without force-pushing or rewriting legacy
MemeBank repositories. Legacy `mbk-*`, `Memebank`, `playground`, and migration
repositories remain separate until a focused migration PR explicitly supersedes them.

`memebank/.github` is an additive semantic merge exception: its newer public
organization governance is preserved rather than replaced by the sealed source
snapshot. All other canonical repositories are private by default.

## Change policy

Resolve conflicts semantically using the merge base, relevant history, contracts,
tests, security controls, observability, and rollback intent. Never resolve a
substantive conflict by selecting an entire side wholesale.
