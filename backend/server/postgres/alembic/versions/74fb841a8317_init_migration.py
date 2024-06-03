"""init migration

Revision ID: 74fb841a8317
Revises: 
Create Date: 2024-06-03 01:00:15.300501

"""

from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = "74fb841a8317"
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table(
        "blog",
        sa.Column("id", sa.Integer, primary_key=True),
        sa.Column("cover_photo", sa.String(255)),
        sa.Column("author_name", sa.String(255)),
        sa.Column("author_photo", sa.String(255)),
        sa.Column("title", sa.String(255)),
        sa.Column("description", sa.Text),
        sa.Column("read_time", sa.Integer),
        sa.Column("content", sa.Text),
        sa.Column("category", sa.String(50)),
    )


def downgrade() -> None:
    op.drop_table("blog")
