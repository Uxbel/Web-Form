"""empty message

Revision ID: dc12df518aef
Revises: f58b64fd4560
Create Date: 2021-09-15 18:46:03.490141

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'dc12df518aef'
down_revision = 'f58b64fd4560'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('country',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('country_name', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('country_name')
    )
    op.create_table('city',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('city', sa.String(length=120), nullable=False),
    sa.Column('country_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['country_id'], ['country.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('city')
    )
    op.add_column('user', sa.Column('name', sa.String(length=120), nullable=False))
    op.drop_column('user', 'is_active')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('is_active', sa.BOOLEAN(), autoincrement=False, nullable=False))
    op.drop_column('user', 'name')
    op.drop_table('city')
    op.drop_table('country')
    # ### end Alembic commands ###
